Hoy es: {{ $now.setLocale('es').format('EEEE d \'de\' MMMM\' del\' yyyy \'y son las\' h:mma') }}
El ID del calendario de Sinapzia es: "688b6e729b7f5cf3f5ba66d058ac4b96ddf520350cc201c762696e38fb55839f@group.calendar.google.com".
El ID del calendario de Pzblo es: "sinapzia@gmail.com".

---

## CAMPO "calendar_id":

- Este campo es necesario unicamente si el cliente quiere agendar un turno, completa este campo con el ID de la agenda. Si el cliente no quiere agendar un turno completa este campo con un string vacío.
- Para saber debes preguntarle al cliente si quiere agendar con Sinapzia o con Pzblo.

---

## CAMPO "operation":

- Si la query es para averiguar disponibilidad completa este campo con "get-availability".
- Si la query es para agendar completa este campo con "create-event".
- Si la query es para retornar turnos ya agendados completa este campo con "get-events".
- Si la query es para modificar un turno completa este campo con "update-event".
- Si la query es para cancelar turno completa este campo con "delete-event".

---

## CAMPO "event_date":

- Si "operation" es "get-availability" o "create-event" completa el campo "event_date" con el día (puede ser una fecha exacta, o tambíen una referencia: hoy, mañana, el próximo lunes, etc.) y la hora (puede ser una hora exacta o un rango: a las 14hs, a la mañana, a la tarde, en cualquier horario).

- Si "operation" es "update-event" completa el campo "event_date" con el nuevo día (puede ser una fecha exacta, o tambíen una referencia: hoy, mañana, el próximo lunes, etc.) y la nueva hora (puede ser una hora exacta o un rango: a las 14hs, a la mañana, a la tarde, en cualquier horario).

- Completa este campo con formato conversacional tipo: "hoy a las 2", "mañana", "el lunes a las 16hs", "el martes 4 a las 9", etc.

---

## CAMPO "client_name":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## CAMPO "event_reason":

- Este campo es necesario unicamente si el cliente quiere agendar o modificar un turno. Si el cliente no quiere agendar/modificar un turno completa este campo con un string vacío.
- Completa este campo con el servicio que el cliente desea agendar. Para conocer si disponemos del servicio usa la herramienta "services".
- Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## CAMPO "event_duration":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.
- Completa este campo con la duración del servicio que el cliente desea agendar en minutos. Para conocer la duración del servicio usa la herramienta "services".
- Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## INSTRUCCIONES:

- Si el usuario quiere cambiar el día u horario de un turno debes:

  1. Usar esta herramienta para averiguar el evento que quiere cambiar (vas a obtener el calendar_id, event_id y el event_duration).
  2. Usar esta herramienta con la operacion "update-event" con los datos correspondientes.

- Si el usuario quiere cambiar un turno entre agendas debes:
  1. Usa esta herramienta para averiguar el evento que quiere cambiar (vas a obtener el event_id y el calendar_id).
  2. Usa esta herramienta para eliminar el evento de la agenda actual (debes usar el calendar_id del evento actual que te fue retornado, no el nuevo).
  3. Usa esta herramienta para crear el evento en la agenda requerida (debes usar el calendar_id de la nueva agenda). Si solo quiere cambiar la agenda asegurate de mantener el dia, la hora y el nombre del sercicio y cliente.
