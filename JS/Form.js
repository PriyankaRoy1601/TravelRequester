//document addEventListener
document.addEventListener('DOMContentLoaded', function () {

    //content
    const form = document.getElementById('frmEmployee');
    const empId = document.getElementById('txtEmpId');
    const empName = document.getElementById('txtName');
    const causeForTravel = document.getElementById('txtCauseForTravel');
    const destination = document.getElementById('txtDestination');
    const fromDate = document.getElementById('dteFromDate');
    const toDate = document.getElementById('dteToDate');
    const numDays = document.getElementById('numDays');
    const source = document.getElementById('txtSource');
    const project = document.getElementById('txtProject');
    const modeOfTravel = document.getElementById('txtModeOfTravel');

    //Error message
    const empIdError = document.getElementById('empIdError');
    const nameError = document.getElementById('nameError');
    const causeForTravelError = document.getElementById('causeForTravelError');
    const destinationError = document.getElementById('destinationError');
    const fromDateError = document.getElementById('fromDateError');
    const ToDateError = document.getElementById('ToDateError');
    const projectError = document.getElementById('projectError');
    const sourceError = document.getElementById('sourceError');
    const modeOfTravelError = document.getElementById('modeOfTravelError');

    //Executing Validations
    empId.addEventListener('input', validate);
    empName.addEventListener('input', validate);
    causeForTravel.addEventListener('input', validate);
    destination.addEventListener('input', validate);
    fromDate.addEventListener('input', validate);
    toDate.addEventListener('input', validate);
    source.addEventListener('input', validate);
    modeOfTravel.addEventListener('input', validate);

    //Disabling toDate function
    toDate.disabled=true;

    //Enabling only when fromDate is entered
    fromDate.addEventListener('input',function(){
        if(fromDate.value.trim()){
            toDate.disabled=false;
        }else{
            toDate.disabled=true;
        }
    })
    

    //To set From Date and To Date
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    const minDate1 = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    fromDate.max = formattedDates(maxDate);
    fromDate.min = formattedDates(minDate1);

    fromDate.addEventListener('change', function () {
        const selectedFromDate = new Date(fromDate.value);
        const minToDate = new Date(selectedFromDate.getFullYear(), selectedFromDate.getMonth(), selectedFromDate.getDate() + 1);
        toDate.min = formattedDates(minToDate);
    });

    toDate.max = formattedDates(maxDate);

    //formatted date
    function formattedDates(date) {
        //yyyy-mm-dd
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    //Display the days
    function calculateDays() {
        const fromDateObj = new Date(fromDate.value);
        const toDateObj = new Date(toDate.value);

        if (!isNaN(fromDateObj) && !isNaN(toDateObj)) {
            const timeDifference = toDateObj - fromDateObj;
            const totalDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

            if (totalDays >= 0) {
                numDays.value = totalDays;
            } else {
                numDays.value = ''; // Clear the field if the dates are invalid
            }
        } else {
            numDays.value = ''; // Clear the field if the dates are invalid
        }
    }

    fromDate.addEventListener('change', calculateDays);
    toDate.addEventListener('change', calculateDays);
    function validate() {
        submitButton.disabled = true;
        let valid = true;

        if (!empId.value.trim()) {
            empIdError.textContent = "Employee Id is required";
            valid = false;
        }
        else {
            empIdError.textContent = " ";

        }

        if (!empName.value.trim()) {
            nameError.textContent = "Name is required";
            valid = false;

        }
        else {
            nameError.textContent = " ";


        }

        if (!causeForTravel.value.trim()) {
            causeForTravelError.textContent = "Cause for Travel is required";
            valid = false;
        }
        else {
            causeForTravelError.textContent = " ";

        }

        if (!destination.value.trim()) {
            destinationError.textContent = "Destination required";
            valid = false;
        }
        else {
            destinationError.textContent = " ";


        }

        if (!fromDate.value.trim()) {
            fromDateError.textContent = "From Date Required";
            valid = false;
        }
        else {
            fromDateError.textContent = " ";

        }

        if (!toDate.value.trim()) {
            ToDateError.textContent = "To Date required";
            valid = false;
        }
        else {
            ToDateError.textContent = " ";
        }

        if (!project.value.trim()) {
            projectError.textContent = "Project is required";
            valid = false;
        }
        else {
            projectError.textContent = " ";

        }

        if (!source.value.trim()) {
            sourceError.textContent = "Source is required";
            valid = false;
        }
        else {
            sourceError.textContent = " ";

        }

        if (!modeOfTravel.value.trim()) {
            modeOfTravelError.textContent = "Mode of Travel Required";
            valid = false;
        }
        else {
            modeOfTravelError.textContent = " ";

        }

        submitButton.disabled = !valid;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Form successfully submitted");
    })

})