import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch";

const Loading = () => {
    const [{ data, isLoading, hasError }] = useJsonFetch('http://localhost:7070/loading', []);
    return (
        <div>
            <h2>Загрузка</h2>
            <p>Статус: {data.status}</p>
            <p>Наличие ошибок: {hasError ? ' Да' : 'Нет' }</p>
            <p>Идет запрос: {isLoading ? 'Да' : 'Нет'}</p>
        </div>
        );
}
export default Loading;