import DIC from '../../Images/DIC.PNG'
import MagicalNotes from '../../Images/MAGICALNOTES.PNG'
import TextUtils from '../../Images/TEXTUTILS.PNG'
import PortfolioSite from '../../Images/portfolioSite.png'
import Parked from '../../Images/ParkedUI.png'
import Flower from '../../Images/Sunflower.jpeg'
import MoodySky from '../../Images/MoodySky.jpeg'
import Lake from '../../Images/Lake.jpeg'
import Street from '../../Images/Street.jpeg'
import Auto from '../../Images/Autoricksaw.jpeg'

export const Data = [{
    websites: [
        {
            name: 'DIC-GTU-Clone-Website',
            img: DIC,
            link: 'https://dic-gtu-clone-ronyparmar.netlify.app/',
            tech: ['HTML', 'CSS']
        },
        {
            name: 'Magical-Notes',
            img: MagicalNotes,
            link: 'https://rony-javascript-magicalnotes.netlify.app/',
            tech: ['HTML', 'Bootstrap', 'Javascript']
        },
        {
            name: 'Text-Utils',
            img: TextUtils,
            link: 'https://rony-react-textutils.netlify.app/',
            tech: ['HTML', 'CSS', 'ReactJs']
        },
        {
            name: 'Portfolio',
            img: PortfolioSite,
            link: 'https://ronyparmar.netlify.app/',
            tech: ['HTML', 'CSS', 'ReactJs']
        }
    ],
    apps: [
        {
            name: 'Parked!',
            img: Parked,
            tech: ['React Native']
        },
    ],
    pics: [
        {
            name: 'Flower',
            img: Flower
        },
        {
            name: '2 Moods Sky',
            img: MoodySky
        },
        {
            name: 'Lake',
            img: Lake
        },
        {
            name: 'Street',
            img: Street
        },
        {
            name: 'Autoricksaw',
            img: Auto
        },
    ]
}]

export default Data;