const Header = () => {
  return (
    <header className="flex items-start justify-between">
      {/* Sisi Kiri: Nama & Role */}
      <div>
        <h1 className="text-base font-medium text-neutral-100 dark:text-neutral-900">
          Diyas Ruwandi
        </h1>
        <p className="text-base text-neutral-400 dark:text-neutral-500">
          Fullstack Developer
        </p>
      </div>

      {/* Sisi Kanan: Status "Available" dengan dot hijau seperti di contoh */}
      <div className="flex items-center gap-2 text-base font-semibold text-neutral-400 dark:text-neutral-600">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>Available</span>
      </div>
    </header>
  )
}

export default Header
