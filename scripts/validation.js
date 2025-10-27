return items.map(item => {
  const output = $input.first().json;
  let validation = {
    isValid: true,
    fallback: ''
  };

  switch (output.operation) {
    case 'get-availability':
      if (!output.event_date) {
        validation.isValid = false;
        validation.fallback = 'Para saber disponibilidad necesito un día u hora';
      }
      break;

    case 'create-event':
      if (!output.event_date || !output.client_name || !output.event_reason) {
        validation.isValid = false;
        validation.fallback = 'Para crear un evento necesito saber el día u hora, el nombre del cliente y el motivo';
      }
      break;

    case 'get-events':
    case 'delete-event':
      break;

    case 'update-event':
      if (!output.event_date) {
        validation.isValid = false;
        validation.fallback = 'Para actualizar un evento necesito un día u hora';
      }
      break;

    default:
      validation.isValid = false;
      validation.fallback = 'Operación no reconocida';
  }

  return {
    json: validation
  };
});