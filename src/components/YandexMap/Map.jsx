import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import selector from "../../redux/selectors/selectors";
import {addPointInStore} from "../../redux/actions/actions";


export default function Map() {
    const selectors = selector(useSelector);
    const dispatch = useDispatch();
    const [objectCity, setObjectCity] = useState(null);
    useEffect(() => getCurrentCoordinates(), [selectors.store.cityId]);
    useEffect(() => handleLoad(), []);
    useEffect(() => { objectCity ? renderPlacemark() : null }, [selectors.points.point]);

    const handleLoad = () => {
        window.ymaps.ready(() => {
            const myMap = new window.ymaps.Map("map", {
                center: [0, 0],
                zoom: 12,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            });
            getCurrentCoordinates(myMap);

            setObjectCity(myMap);
        })
    }

    const getCurrentCoordinates = (myMap) => {
        let myGeocoder = window.ymaps.geocode(selectors.store.cityId.name);
        myGeocoder.then(
            function (res) {
                myMap ? myMap.setCenter(
                    res.geoObjects.get(0).geometry.getCoordinates(),
                    12
                ) :
                objectCity.setCenter(
                    res.geoObjects.get(0).geometry.getCoordinates(),
                    12
                )
            },
            function (err) {
                console.log(err)
            }
        );
    }
    const renderPlacemark = () => {
        selectors.points.point.forEach(item => {
            window.ymaps.geocode(`${selectors.store.cityId.name}, ${item.address}`)
                .then(res => {
                    const coordinats = res.geoObjects.get(0).geometry.getCoordinates()
                    const mark = new window.ymaps.Placemark((coordinats), {
                        balloonContentBody: [
                            `Наименование: ${item.name}`,
                            '<br />',
                            `Адрес: ${item.address}`,
                            '</address>'
                        ].join(''),
                    }, {
                        preset: 'islands#greenCircleIcon'
                    })
                    mark.events.add('click', () => {
                        dispatch(addPointInStore(item))
                    })
                    objectCity.geoObjects.add(mark);
                })
        })
    }

    return(
        <div className="params__map">
            <span>Выбрать на карте:</span>
            <div id="map" style={{
                marginTop: '32px',
                width: '100%',
                height: '400px'
            }}> </div>
        </div>
    )
}