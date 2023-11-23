import Slider from 'react-slick'

function formatStoryName(string) {
    const newString = string.split(' ').join('_').slice(0, 12)
    return `${newString}...`
}

export default function DisplaySlider({ storiesData }) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <Slider {...settings}>
            {storiesData?.map(each => (
                <div className="story-container" key={each.userId}>
                    <img src={each.storyUrl} alt="user story" />
                    <span className="story-heading">
                        {formatStoryName(each.userName)}
                    </span>
                </div>
            ))}
        </Slider>
    )

}