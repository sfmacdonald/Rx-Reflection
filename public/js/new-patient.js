
    // Define form elements
    const elements = {
        firstName: {
            label: 'First Name',
            type: 'text',
            id: 'first-name',
            name: 'first-name',
            required: true,
        },
        middleName: {
            label: 'Middle Name',
            type: 'text',
            id: 'middle-name',
            name: 'middle-name',
        },
        lastName: {
            label: 'Last Name',
            type: 'text',
            id: 'last-name',
            name: 'last-name',
            required: true,
        },
        dateOfBirth: {
            label: 'Date Of Birth',
            type: 'date',
            id: 'date-of-birth',
            name: 'date-of-birth',
            required: true,
        },
        gender: {
            label: 'Gender:',
            type: 'radio',
            id: ['male', 'female', 'other'],
            name: 'gender',
            value: ['Male', 'Female', 'Other'],
            required: true,
        },
        height: {
            label: 'Height (cm)',
            type: 'number',
            id: 'height',
            name: 'height',
            placeholder: 'Enter height',
            required: true,
        },
        weight: {
            label: 'Weight (in pounds):',
            type: 'number',
            id: 'weight',
            name: 'weight',
            step: '0.1',
            required: true,
        },
        email: {
            label: 'Email',
            type: 'email',
            id: 'email',
            name: 'email',
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            required: true,
        },
        address1: {
            label: 'Address 1',
            type: 'text',
            id: 'address1',
            name: 'address1',
            required: true,
        },
        address2: {
            label: 'Address 2',
            type: 'text',
            id: 'address2',
            name: 'address2',
        },
        city: {
            label: 'City',
            type: 'text',
            id: 'city',
            name: 'city',
            required: true,
        },
        state: {
            label: 'State',
            type: 'select',
            id: 'state',
            name: 'state',
            required: true,
            options: [
                { value: 'AL', text: 'Alabama' },
                { value: 'AK', text: 'Alaska' },
                { value: 'AZ', text: 'Arizona' },
                { value: 'AR', text: 'Arkansas' },
                { value: 'CA', text: 'California' },
                { value: 'CO', text: 'Colorado' },
                { value: 'CT', text: 'Connecticut' },
                { value: 'DE', text: 'Delaware' },
                { value: 'FL', text: 'Florida' },
                { value: 'GA', text: 'Georgia' },
                { value: 'HI', text: 'Hawaii' },
                { value: 'ID', text: 'Idaho' },
                { value: 'IL', text: 'Illinois' },
                { value: 'IN', text: 'Indiana' },
                { value: 'IA', text: 'Iowa' },
                { value: 'KS', text: 'Kansas' },
                { value: 'KY', text: 'Kentucky' },
                { value: 'LA', text: 'Louisiana' },
                { value: 'ME', text: 'Maine' },
                { value: 'MD', text: 'Maryland' },
                { value: 'MA', text: 'Massachusetts' },
                { value: 'MI', text: 'Michigan' },
                { value: 'MN', text: 'Minnesota' },
                { value: 'MS', text: 'Mississippi' },
                { value: 'MO', text: 'Missouri' },
                { value: 'MT', text: 'Montana' },
                { value: 'NE', text: 'Nebraska' },
                { value: 'NV', text: 'Nevada' },
                { value: 'NH', text: 'New Hampshire' },
                { value: 'NJ', text: 'New Jersey' },
                { value: 'NM', text: 'New Mexico' },
                { value: 'NY', text: 'New York' },
                { value: 'NC', text: 'North Carolina' },
                { value: 'ND', text: 'North Dakota' },
                { value: 'OH', text: 'Ohio' },
                { value: 'OK', text: 'Oklahoma' },
                { value: 'OR', text: 'Oregon' },
                { value: 'PA', text: 'Pennsylvania' },
                { value: 'RI', text: 'Rhode Island' },
                { value: 'SC', text: 'South Carolina' },
                { value: 'SD', text: 'South Dakota' },
                { value: 'TN', text: 'Tennessee' },
                { value: 'TX', text: 'Texas' },
                { value: 'UT', text: 'Utah' },
                { value: 'VT', text: 'Vermont' },
                { value: 'VA', text: 'Virginia' },
                { value: 'WA', text: 'Washington' },
                { value: 'WV', text: 'West Virginia' },
                { value: 'WI', text: 'Wisconsin' },
                { value: 'WY', text: 'Wyoming' }
            ],
        },
        zipcode: {
            label: 'Zip Code',
            type: 'text',
            id: 'zipcode',
            name: 'zipcode',
            pattern: "^[0-9]{5}$",
            required: true,
        },
        phone1: {
            label: 'Phone 1',
            type: 'tel',
            id: 'phone1',
            name: 'phone1',
            pattern: "[+][0-9]{2} [0-9]{3}-[0-9]{4}",
            required: true,
        },
        phone2: {
            label: 'Phone 2 (optional)',
            type: 'tel',
            id: 'phone2',
            name: 'phone2',
            pattern: "[+][0-9]{2} [0-9]{3}-[0-9]{4}",
        },
        // Add any additional form elements here
    };
    function createForm() {
        const form = document.getElementById('patientForm');

        for (const key in elements) {
            const field = elements[key];
            let fieldElement;

            if (field.type === 'radio') {
                fieldElement = document.createElement('div');
                fieldElement.appendChild(document.createTextNode(field.label));
                field.id.forEach((id, index) => {
                    const input = document.createElement('input');
                    input.type = field.type;
                    input.id = id;
                    input.name = field.name;
                    input.value = field.value[index];
                    input.required = field.required;
                    
                    const label = document.createElement('label');
                    label.setAttribute('for', id);
                    label.textContent = field.value[index];
                    
                    fieldElement.appendChild(input);
                    fieldElement.appendChild(label);
                });
            } else if (field.type === 'select') {
                fieldElement = document.createElement('select');
                fieldElement.id = field.id;
                fieldElement.name = field.name;
                fieldElement.required = field.required;
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option.value;
                    opt.textContent = option.text;
                    fieldElement.appendChild(opt);
                });
            } else {
                fieldElement = document.createElement('input');
                fieldElement.type = field.type;
                fieldElement.id = field.id;
                fieldElement.name = field.name;
                if (field.placeholder) fieldElement.placeholder = field.placeholder;
                if (field.pattern) fieldElement.pattern = field.pattern;
                if (field.step) fieldElement.step = field.step;
                fieldElement.required = field.required;
            }

            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.textContent = field.label;

            form.appendChild(label);
            if (field.type !== 'radio') form.appendChild(document.createElement('br'));
            form.appendChild(fieldElement);
            form.appendChild(document.createElement('br'));
        }

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        form.appendChild(submitButton);
    }

    createForm();