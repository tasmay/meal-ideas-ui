
export default function MultiInputField(props) {
    return (
      <div>
        <label htmlFor={props.name} className="block text-xs font-medium tracking-wider uppercase text-gray-700">
          {props.buttonLabel}
        </label>
        <div className="mt-1">
          <input
            value={props.selected}
            type={props.name}
            name={props.name}
            id={props.name}
            className="relative w-full cursor-default border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
            placeholder={props.helptext}
            aria-describedby={props.name}
            onChange={(e) => {props.onChange(e.target.value)}}
          />
        </div>
      </div>
    )
}
  