async function save_invoice(items, patient, customer) {
  const { message: invoice } = await frappe.call({
		method: 'vet_care.api.save_invoice',
		args: { items, patient, customer },
	});
  return invoice;
}

async function pay_invoice(invoice, payments) {
	const { message: sales_invoice } = await frappe.call({
		method: 'vet_care.api.pay_invoice',
		args: { invoice, payments },
	});
	return sales_invoice;
}

async function get_invoice_items(invoice) {
	const { message: items } = await frappe.call({
		method: 'vet_care.api.get_invoice_items',
		args: { invoice },
	});
	return items;
}

async function get_clinical_history(patient, filter_length) {
  if (!patient) return [];
	const { message: clinical_history } = await frappe.call({
		method: 'vet_care.api.get_clinical_history',
		args: { patient, filter_length },
	});
  return clinical_history;
}

async function make_patient_activity(patient, activity_items) {
  const { message: patient_activity } = await frappe.call({
    method: 'vet_care.api.make_patient_activity',
    args: { patient, activity_items },
  });
  return patient_activity;
}

async function make_vital_signs(patient, data) {
	const { message: vital_signs } = await frappe.call({
		method: 'vet_care.api.make_vital_signs',
		args: { patient, vital_signs: data },
	});
	return vital_signs;
}

function get_item_rate(name) {
	return frappe.db.get_value('Item', { name }, 'standard_rate');
}

async function get_first_animal_by_owner(owner) {
	const { message: animal } = await frappe.call({
		method: 'vet_care.api.get_first_animal_by_owner',
		args: { owner },
	});
	return animal;
}
