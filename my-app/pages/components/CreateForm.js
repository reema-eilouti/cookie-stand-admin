export default function CreateForm({ onCreate }) {

    return (<>
        <form onSubmit={onCreate}>
            <h1>Create Cookie Stand</h1>

            <label>Location</label>
            <input name="location" type="text" className="w-10/12 my-5" />
            <br/>
            <label> Minimum Customers Per Hour |</label>
            <label> Maximum Customers Per Hour |</label>
            <label> Average Cookies Per Hour </label>
            <br/>
            <input name="min" type="text" />
            <input name="max" type="text" />
            <input name="avg" type="text" />

            <button type="submit">Create</button>
        </form>
    </>
    )
}