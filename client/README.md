### Собрал проект согласно ИПР
* Тестовый проект выполняющий основные операции с формами
  * Синхронную/Ассинхронную валидацию
  * Кастомная валидация
  * Валидация с валидационными схемами
  * Работа с массивами
  * Работа с селектами, чекбоксами и радиобатонами
  

* Описал два почти аналогичных процесса, на двух разных библиотеках
  * Formik
  * React-hook-forms



# Formik
👆 Контролируемый менеджер форм

&emsp;&emsp; 🔹 Инициализация
```js
<Formik initialValues={{ email: '', password: '' }} />
```

&emsp;&emsp; 🔹 Общий метод валидации
```js
<Formik validate={values => {
    const errors = {};
    
    if (!values.email) {
        errors.email = 'Required';
    }
    
    return errors;
}} />
```
🎯 Срабатывает на каждое изменение в инпутах и блюрах    
🎯 Общая функция для всех инпутов, не очень выгодно запускать

&emsp;&emsp; 🔹 Колбек отправки формы  
&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает при отсутствии ошибок
```js
<Formik onSubmit={(values, {
    resetForm,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setFormikState,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateField,
    validateForm,
}) => {
        //...
    }}
/>
```

🎯 Вывести ошибку с бека в интерфейс
```js
<Formik onSubmit={async (values, {setFieldError}) => {
            await sleep(3000);
            const errors: Partial<typeof values> = {}
        
            if (values.email === 'test@mail.ru') {
                errors.email = 'test@mail.ru is exist'
            }
        
            Object.entries(errors).map(([fieldName, error]) => {
                setFieldError(fieldName, error)
            })
}}
/>
```

🎯 Вывести кастомную ошибку, не связанную с полем
```js
<Formik
    initialValues={{
        frontSkills: [],
        backSkills: []
    }}
    validate={(values) => {
        const errors: Partial<typeof values> = {};
    
        if (!values.frontSkills.length && !values.backSkills.length) {
            errors.skillError = 'Select skills'
        }
    
        return errors;
    }}>
        {({errors}) => {
        return (
            <form onSubmit={handleSubmit}>
                {errors?.skillError && <Text color='error' className='y-offset-md_top' >{errors?.skillError}</Text>}
            </form>
        )
    }}
</Formik>
```

# React hooks form
👆 Менеджер форм на неконтролируемых и контролируемых инпутах

🎯 Работа с не контролируемым полем ведеться путем регистрации рефа, и сохранением его статуса в глобальном стейте формы  

🔹 Подключение неконтролируемого компонента  
```js
const {
    handleSubmit,
    register
} = useForm()

return (<form onSubmit={handleSubmit} >
    <input {...register('firstName')} />    
</form>)
```

🔹 Подключение контролируемого компонента
```js
const { control } = useForm();

return (
    <Controller
        render={({ field }) => <MyInput {...field} />}
        name="firstName"
        control={control}
        defaultValue=""
    />
);
```

🔹 Подписка на обновление других инпутов
```js
const {
    register,
    watch,
    formState: { errors },
    handleSubmit
} = useForm();

const watchAllFields = watch(); // 👉🏼 Содержит в себе актуальное значение всех полей
const watchAge = watch("age"); // 👉🏼 Содержит в себе актуальное значение конкретного поля


console.log("watchAllFields", watchAllFields);
console.log("watchAge", watchAge);

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            {...register("name", { required: true, maxLength: 50 })}
        />
        <input
            type="number"
            {...register("age", { required: true })}
        />
    </form>
    );
```

🔹 Вывести ошибку
```js
const { register, formState: { errors } } = useForm();

<input {...register("name", { required: true })} />
{errors.name && <span>This field is required</span>}
```