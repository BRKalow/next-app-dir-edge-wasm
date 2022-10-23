// @ts-expect-error
import wasm from '../wasm/some_wasm_file.wasm?module'

console.log(wasm)

export default function Page() {
  return "This build should fail"
}

export const runtime = "experimental-edge"
