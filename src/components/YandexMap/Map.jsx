import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import storeSelector from "../../redux/selectors/storeSelector";
import pointSelector from '../../redux/selectors/pointSelector'
import {addPointInStore} from "../../redux/actions/actions";


export default function Map() {
    const store = useSelector(storeSelector());
    const points = useSelector(pointSelector());
    const dispatch = useDispatch();
    const [objectCity, setObjectCity] = useState(null);
    useEffect(() => getCurrentCoordinates(), [store.cityId]);
    useEffect(() => handleLoad(), []);
    useEffect(() => { objectCity ? renderPlacemark() : null }, [points.point]);

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
        let myGeocoder = window.ymaps.geocode(store.cityId.name);
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
        points.point.forEach(item => {
            window.ymaps.geocode(`${store.cityId.name}, ${item.address}`)
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
                height: '300px'
            }}> </div>
        </div>
    )
}