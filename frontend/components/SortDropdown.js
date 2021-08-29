import { Listbox, Transition } from "@headlessui/react"
import classNames from "classnames"
import { AiOutlineCheck } from "react-icons/ai"
import { RiArrowUpDownFill } from "react-icons/ri"

function SortDropdown({ data, selected, setSelected }) {
  const listBoxOption = (active) => {
    return classNames({
      "cursor-default select-none relative": true,
      "text-red-900 bg-red-100": active,
      "text-gray-900": !active,
    })
  }

  const selectedOption = (selected) => classNames({
    "flex items-center justify-between px-2 truncate": true,
    "font-medium": selected,
    "font-normal": !selected,
  })

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="flex justify-between items-end w-48 border px-2 py-1 text-left rounded-lg cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-purple shadow-md">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none"><RiArrowUpDownFill /></span>
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute w-full mt-1 py-1 overflow-auto bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {
              data.map(o => (
                <Listbox.Option key={o.id} className={({ active }) => listBoxOption(active)} value={o}>
                  {({ active, selected }) => (
                    <div className={selectedOption(selected)}>
                      {o.name}
                      {
                        selected
                          ? <AiOutlineCheck />
                          : null
                      }
                    </div>
                  )}
                </Listbox.Option>
              ))
            }
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default SortDropdown