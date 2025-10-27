const items = $input.all();
const unifiedEvents = items.map(item => {
  const eventAt = new Date(item.json.event_at);
  eventAt.setHours(eventAt.getHours() - 3);
  
  return {
    calendar_id: item.json.calendar_id,
    event_code: item.json.event_code,
    event_at: eventAt.toISOString(),
    Title: item.json.Title
  };
});

return [{ json: { events: unifiedEvents } }];