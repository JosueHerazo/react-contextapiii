import { ReactNode } from "react"


type ErrorMessajeProps = {
children: ReactNode
}
// ProsWithChildren tambien hace el mismo type
export default function ErrorMessaje({children} : ErrorMessajeProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-center">
      {children}
    </p>
  )
}
