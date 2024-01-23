
export default function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col min-h-full justify-center md:px-12 lg:px-0">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </main>
      </div>
    </>
  )
}
