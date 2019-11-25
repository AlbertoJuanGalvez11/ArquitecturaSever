"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (Cliente) => {
    Cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.mesanjes = (Cliente, io) => {
    Cliente.on('mensaje', (payload) => {
        console.log(payload);
        io.emit('mensaje-response', payload);
    });
};
