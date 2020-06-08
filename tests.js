const { test } = require('@ianwalter/bff')
const createTimer = require('@ianwalter/timer')
const { sleep, asleep } = require('.')

test('sleep', t => {
  const timer = createTimer()
  sleep(2000)
  t.expect(timer.stop()).toBeGreaterThan(1999)
})

test('asleep', async t => {
  const timer = createTimer()
  await asleep(1000)
  t.expect(timer.stop()).toBeGreaterThan(999)
})
