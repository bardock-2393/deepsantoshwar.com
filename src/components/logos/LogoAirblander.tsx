export function LogoAirblander(props: React.ComponentProps<'img'>) {
  return (
    <img
      src="/logos/airblander.png"
      alt="Airblander Logo"
      className="size-full rounded-xs object-contain"
      {...props}
    />
  )
}
