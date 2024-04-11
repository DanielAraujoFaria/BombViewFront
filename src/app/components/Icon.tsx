import { Popcorn, Film, Gamepad2} from "lucide-react";

interface IconProps {
    name: string
}

export function Icon({name} : IconProps){

    const icons = [
        {name: "popcorn", icon: <Popcorn /> },
        {name: "film", icon: <Film /> },
        {name: "gamepad", icon: <Gamepad2 /> },
    ]

    return icons.find( (icon) => name == icon.name )?.icon
    
}