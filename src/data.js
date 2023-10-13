export const language = 'JavaScript'

const themes = [
    {
        name: 'Variáveis',
    },
    {
        name: 'Tipos de Dados',
    },
    {
        name: 'Operadores',
    },
    {
        name: 'Estruturas Condicionais',
    },
    {
        name: 'Arrays',
    },
    {
        name: 'Objetos',
    },
    {
        name: 'Estruturas de Repetição',
    },
    {
        name: 'High Order Function',
    },
    {
        name: 'Funções',
    },
    {
        name: 'Escopo de Variáveis',
    },
    {
        name: 'Assíncronismos',
    },
    {
        name: 'Then/Try e Catch',
    },
]

//Insere a propriedade mensagem em cada item do objeto themes
themes.forEach((theme) => {
    theme.message = `Escreva uma documentação com exemplos de como funciona ${theme.name} em ${language}, seja o mais detalhado possível, separe os exemplos por tópicos e não esqueça de explicar o que cada linha faz. Retorne a resposta em uma estrutura HTML para ser mostrado em tela, adicione classes do tailwind css para estilizar o conteúdo. Crie um texto longo e completo.`
})

export default themes
