const request = require('supertest');

const obterToken = async (user,password)=> {
    const respostaLogin = await request(process.env.BASE_URL)
    .post('/login')
    .set('Content-Type','application/json')
    .send({
        'username': user,
        'senha': password
    })

    const token = respostaLogin.body.token;
    return token;

} 

module.exports = {
    obterToken
}