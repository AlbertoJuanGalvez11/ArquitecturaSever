import { Socket } from 'socket.io';

export const desconectar = (Cliente: Socket) => {
    Cliente.on('disconnect', ()=> {
        console.log('Cliente Desconectado');
    });
}

export const mesanjes = (Cliente: Socket, io: SocketIO.Server) => {
    Cliente.on('mensaje', (payload:{ de: string, cuerpo: string })=> {
        console.log(payload);
        io.emit('mensaje-response', payload);
    });
}

