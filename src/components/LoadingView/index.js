import Loader from 'react-loader-spinner'

export default function LoadingView({height, width}) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={height} width={width} />
    </div>
  )
}
