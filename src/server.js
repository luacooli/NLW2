const proffys = [
  {
    name: "Luana Correia",
    avatar: "https://avatars3.githubusercontent.com/u/51122375?s=460&u=89a57a78839cd36a24cbdea65763c9a8598f2300&v=4",
    whatsapp: "954741328",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [152463987],
    time_to: [182546973]
  },
  {
    name: "Mamae Correia",
    avatar: "https://avatars3.githubusercontent.com/u/62381724?s=460&u=e376963862cd01f6aced544e64e97a6a764d1087&v=4",
    whatsapp: "996951009",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [152463987],
    time_to: [182546973]
  },
  {
    name: "Amanda Correia",
    avatar: "https://avatars0.githubusercontent.com/u/62381723?s=460&v=4",
    whatsapp: "954731328",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [152463987],
    time_to: [182546973]
  }
]

const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
]

const weekdays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

// funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render('index.html')
}

function pageStudy(req, res) {
  const filters = req.query
  // console.log(filters)
  return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  // if isEmpty
  const isNotEmpaty = Object.keys(data).length > 0
  if (isNotEmpaty) {
    data.subject = getSubject(data.subject)
    //add data to proffys list
    proffys.push(data)

    return res.redirect("/study")
  }

  //if not, show this page
  return res.render('give-classes.html', { subjects, weekdays })
}

//server
const express = require('express')
const server = express()

//nunjucks configuration } (template engine)
const nunjucks = require('nunjucks')

// nunjucks configuration
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

//config statics files (css, scripst, images)
server.use(express.static('public'))
  // routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  // start server
  .listen(5509)