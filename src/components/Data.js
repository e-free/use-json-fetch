import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

const Data = () => {
    const [{ data, isLoading, hasError }] = useJsonFetch('http://localhost:7070/data', 5 * 1000, []);
    return (
        <div>
            <h2>Успешно</h2>
            <p>Статус: {data.status}</p>
            <p>Наличие ошибок: {hasError ? ' Да' : 'Нет' }</p>
            <p>Идет запрос: {isLoading ? 'Да' : 'Нет'}</p>
        </div>
        );
}

export default Data;