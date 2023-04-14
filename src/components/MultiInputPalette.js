import { useState } from 'react'

const ingredients = [
  { id: 1, name: 'banana', keywords: 'banana, bananas' },
]

export default function MultiInputPalette(props) {

  const [tags, setTags] = useState([])

  const removeTag = (i) => {
    const newTags = [ ...tags ]
    newTags.splice(i, 1)
    setTags(newTags)
  }

  const inputKeyDown = (e) => {
    const val = e.target.value
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setTags([...tags, val])
      e.target.value = null
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1)
    }
  }

  return (
    <div className="input-tag">
        <label htmlFor={props.name} className="block text-xs font-medium tracking-wider uppercase text-gray-700">
          {props.buttonLabel}
        </label>
        <div className="mt-1">
          <ul className="inline-flex">
            { tags.map((tag, i) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-full bg-lime-600 py-0.5 pl-2 pr-0.5 text-xs font-medium text-white">
                  {tag}
                  <button
                    type="button"
                    className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-lime-50 hover:text-lime-500 focus:bg-lime-500 focus:text-white focus:outline-none"
                    onClick={() => { removeTag(i) }}
                  >
                    <span className="sr-only">Remove small option</span>
                    <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                      <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                  </button>
                </span>
              </li>
            ))}
            <li className="">
                <input
                    type="text"
                    name={props.name}
                    id={props.name}
                    className="relative w-full cursor-default border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
                    placeholder={props.helptext}
                    aria-describedby={props.name}
                    onKeyDown={inputKeyDown}
                />
            </li>
          </ul>
        </div>
    </div>
  )
}
