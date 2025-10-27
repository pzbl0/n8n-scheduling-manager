Hoy es: {{ $now.setLocale('es').format('EEEE d \'de\' MMMM\' del\' yyyy \'y son las\' h:mma') }}
El ID del calendario de Sinapzia es: "688b6e729b7f5cf3f5ba66d058ac4b96ddf520350cc201c762696e38fb55839f@group.calendar.google.com".
El ID del calendario de Pzblo es: "sinapzia@gmail.com".

---

## CAMPO "calendar_id":

- Completa este campo con el ID de la agenda.
- Para retornar los eventos de un usuario no hace falta completar este campo. Puedes dejarlo con un string vacío.
- Para saber debes preguntarle al cliente si quiere agendar con Sinapzia o con Pzblo.

---

## CAMPO "query":

- Completa este campo con información adicional sobre que evento el usuario quiere modificar o cancelar únicamente cuando tiene más de un evento agendado. La información adicional puede ser el nombre del evento/servicio o la fecha u hora exacta.
  Ejemplos de "query":
  "Modificar turno [dia, hora o servicio actual del turno a modificar], la nueva fecha es [dia y hora de la nueva fecha]".
  "Cancelar turno [dia, hora o servicio actual del turno a cancelar]".
- Si el cliente no quiere modificar/cancelar un turno o no tiene más de un evento agendado entonces completa este campo con un string vacío.

---

## CAMPO "operation":

- Si la query es para averiguar disponibilidad completa este campo con "get-availability".
- Si la query es para agendar completa este campo con "create-event".
- Si la query es para retornar turnos ya agendados completa este campo con "get-events".
- Si la query es para modificar un turno completa este campo con "update-event".
- Si la query es para cancelar turno completa este campo con "delete-event".

---

## CAMPO "event_date":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.

- Si "operation" es "get-availability" o "create-event" completa el campo "event_date" con el día (puede ser una fecha exacta, o tambíen una referencia: hoy, mañana, el próximo lunes, etc.) y la hora (puede ser una hora exacta o un rango: a las 14hs, a la mañana, a la tarde, en cualquier horario).

- Si "operation" es "update-event" completa el campo "event_date" con el nuevo día (puede ser una fecha exacta, o tambíen una referencia: hoy, mañana, el próximo lunes, etc.) y la nueva hora (puede ser una hora exacta o un rango: a las 14hs, a la mañana, a la tarde, en cualquier horario).

---

## CAMPO "client_name":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## CAMPO "event_reason":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.
- Completa este campo con el servicio que el cliente desea agendar. Para conocer si disponemos del servicio usa la herramienta "services".
- Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## CAMPO "event_duration":

- Este campo es necesario unicamente si el cliente quiere agendar un turno. Si el cliente no quiere agendar un turno completa este campo con un string vacío.
- Completa este campo con la duración del servicio que el cliente desea agendar en minutos. Para conocer la duración del servicio usa la herramienta "services".
- Si el cliente no quiere agendar un turno completa este campo con un string vacío.

---

## INSTRUCCIONES:

- Si el usuario quiere cambiar un turno entre agendas debes:
  1. Averiguar el evento que quiere cambiar (vas a obtener el event_id y el calendar_id).
  2. Eliminar el evento de la agenda actual (debes usar el calendar_id del evento actual que te fue retornado, no el nuevo).
  3. Crear el evento en la agenda requerida (debes usar el calendar_id de la nueva agenda). Si solo quiere cambiar la agenda asegurate de mantener el dia, la hora y el nombre del sercicio y cliente.
