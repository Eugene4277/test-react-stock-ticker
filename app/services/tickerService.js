import io from 'socket.io-client';
import { setTicker } from '../store/actionCreators';
import { store } from '../index';


let socket = null;



export const connectNode = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            store.dispatch(setTicker(JSON.parse(data)));
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
