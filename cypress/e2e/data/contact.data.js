module.exports = [
    {
        title: 'Verify that user can not submit contact information without required field [firstname]',
        firstname: '',
        lastname: 'Russell',
        email: 'vanessa.russell@coolcash.com',
        subject: 'Test1',
        message: 'This is a test contact us message',
        submitted: false
    },
    {
        title: 'Verify that user can not submit contact information without required field [email]',
        firstname: 'Vanessa',
        lastname: 'Russell',
        email: '',
        subject: 'Test2',
        message: 'This is a test contact us message',
        submitted: false
    },
    {
        title: 'Verify that user can submit contact information with required fields',
        firstname: 'Vanessa',
        lastname: 'Russell',
        email: 'vanessa.russell@coolcorp.com',
        subject: 'Test3',
        message: 'This is a test contact us message',
        submitted: false
    },
    {
        title: 'Verify that user can not submit contact information without required field [message]',
        firstname: 'Vanessa',
        lastname: 'Russell',
        email: 'vanessa.russell@coolmarket.com',
        subject: 'Test4',
        message: '',
        submitted: false
    },
    {
        title: 'Verify that user can not submit contact information without required field [subject]',
        firstname: 'Vanessa',
        lastname: 'Russell',
        email: 'vanessa.russell@coolmarket.com',
        subject: '',
        message: 'This is a test contact us message',
        submitted: false
    },
    {
        title: 'Verify that user can not submit contact information without required field [lastname]',
        firstname: 'Vanessa',
        lastname: '',
        email: 'vanessa.russell@coolmarket.com',
        subject: '',
        message: 'This is a test contact us message',
        submitted: false
    }
]