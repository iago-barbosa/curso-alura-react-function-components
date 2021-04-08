
import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth />
            <TextField
                value={cpf}
                id="cpf"
                label="CPF"
                variant="outlined"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                margin="normal"
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({ cpf: ehValido })
                }}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                fullWidth />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch name="promocoes" checked={promocoes} onChange={event => {
                        setPromocoes(event.target.checked);
                    }} color="primary" />
                } />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch name="novidades" checked={novidades} onChange={event => {
                        setNovidades(event.target.checked);
                    }} color="primary" />
                } />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;