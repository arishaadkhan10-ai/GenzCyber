// Re-export the source entry so bundlers can resolve modules correctly.
// This mirrors the public API defined in ../src/index.js.
export * from '../src/index'

// Default export should remain the main UploadMedia component.
export { default } from '../src/UploadMedia'
