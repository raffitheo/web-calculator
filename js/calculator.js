calculate = () => {
    if (form.display.value == '') alert('There is no equation to calculate!');
    else form.display.value = eval(form.display.value);
}

clearDisplay = () => { form.display.value = ''; }

removeLast = () => {
    if (form.display.value == '') alert('There is nothing to delete!');
    if (form.display.value == 'Infinity') form.display.value = '';
    else form.display.value = form.display.value.slice(0, -1);
}

val = (result) => { form.display.value += result; }