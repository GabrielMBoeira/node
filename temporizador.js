const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', function(){ //*/5 tempo em tempo -> *5segundo 5
    console.log('Executando tarefa1!', new Date().getSeconds())  //*/5s *qlqr min 9h *diames *mes 2= ter (0 domingo)
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa!')
}, 20000)

//setImmediate -> outros temporizadores
//setInterval -> outros temporizadores

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa2!', new Date().getSeconds())
})