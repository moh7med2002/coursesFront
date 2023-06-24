import HistoryIcon from '@mui/icons-material/History';
import StorageIcon from '@mui/icons-material/Storage';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import ScienceIcon from '@mui/icons-material/Science';
import HtmlIcon from '@mui/icons-material/Html';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code'

export const categories = [
    {
        id:1,
        image:"https://www.coursat.org/uploads/categories/c0e1db9b6f9b033623d1d7c2677eb43b14de0a6b.jpg",
        title:"البرمجة",
        icon:<CodeIcon sx={{fontSize:"40px"}}/>
    },
    {
        id:2,
        image:"https://www.coursat.org/uploads/categories/35c0ea83dcde9a8e8e8f288c12beaf28238f5bb5.jpg",
        title:"لغات",
        icon:<PublicIcon sx={{fontSize:"40px"}}/>
    },
    {
        id:3,
        image:"https://www.coursat.org/uploads/categories/754e6cd30c26e3f4faaa16ae244a3f7fe5674d3c.jpg",
        title:"تطوير الويب",
        icon:<HtmlIcon sx={{fontSize:"40px"}}/>
    },
    {
        id:4,
        image:"https://www.coursat.org/uploads/categories/a531f44208a82d1e372c676f4efd4a8160dc9133.jpg",
        title:"العلوم",
        icon:<ScienceIcon sx={{fontSize:"40px"}}/>
    },
    {
        id:5,
        image:"https://www.coursat.org/uploads/categories/69dd7f754137636a596dc7962f218c7478de6098.jpg",
        title:"الرياضيات",
        icon:<SuperscriptIcon sx={{fontSize:"40px"}}/>
    },
    {
        id:6,
        image:"https://www.coursat.org/uploads/categories/790d5698badab45f6a7954d701ebf43a1fb2b0c7.jpg",
        title:"قواعد البيانات",
        icon:<StorageIcon sx={{fontSize:"40px"}}/>
    },
]