const items = $input.all();

if (items.length === 0 || items.every(item => !item.json || Object.keys(item.json).length === 0)) {
  return [{ json: { message: "No tenés ningún evento agendado." } }];
}

const unifiedEvents = items
  .filter(item => item.json && item.json.event_at && !isNaN(new Date(item.json.event_at).getTime()))
  .map(item => {
    const eventAt = new Date(item.json.event_at);
    eventAt.setHours(eventAt.getHours() - 3);

    return {
      calendar_id: item.json.calendar_id,
      event_code: item.json.event_code,
      event_at: eventAt.toISOString(),
      event_title: item.json.Title
    };
  });

if (unifiedEvents.length === 0) {
  return [{ json: { message: "No tenés ningún evento agendado." } }];
}

return [{ json: { events: unifiedEvents } }];