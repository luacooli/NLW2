const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (db) => {
  // insert data
  proffyValue = {
    name: 'Luana',
    avatar: 'https://avatars3.githubusercontent.com/u/51122375?s=460&u=89a57a78839cd36a24cbdea65763c9a8598f2300&v=4',
    whatapp: '954741328',
    bio: 'Instrutor de educacao fisica'
  }

  classValue = {
    subject: '1',
    cost: '200'
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues })

  const selectedProffys = await db.all("SELECT * FROM proffys")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN  classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  const selectClassesSchedule = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = '1'
    AND class_schedule.weekday = '0'
    AND class_schedule.time_from <= '520'
    AND class_schedule.time_to > '520'
  `)
  console.log(selectClassesSchedule)
})