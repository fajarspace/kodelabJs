function Body() {
    return(
        <main>
            <div className="container">
                <h1>Congrats!</h1>
                <p>
                You're successfully running JSON Server
                <br />
                ✧*｡٩(ˊᗜˋ*)و✧*｡
                </p>

                <div id="resources"></div>

                <p>
                To access and modify resources, you can use any HTTP method:
                </p>
                <p>
                <code>GET</code>
                <code>POST</code>
                <code>PUT</code>
                <code>PATCH</code>
                <code>DELETE</code>
                <code>OPTIONS</code>
                </p>

                <div id="custom-routes"></div>

                <h1>Documentation</h1>
                <p>
                <a href="https://github.com/typicode/json-server">
                    README
                </a>
                </p>
            </div>
        </main>
    )
}
export default Body;