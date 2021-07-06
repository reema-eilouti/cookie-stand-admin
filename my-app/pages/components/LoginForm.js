export default function LoginForm(props) {
    return (
        <div>
            <form onSubmit={props.login} method="POST">
                <input name="username" type="text" placeholder="User name" required />
                <input name="password" type="password" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
    )
}