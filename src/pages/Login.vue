<template>
    <div>
        <h1>Login</h1>
        <form>
            <fieldset>
                <label>
                    First name
                    <input name="first_name" placeholder="First name" autocomplete="given-name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" placeholder="Email" autocomplete="email" />
                </label>
            </fieldset>
            <input type="submit" value="Login" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    setup() {
        return {
            msg: 'Hello World'
        }
    }
}
</script>