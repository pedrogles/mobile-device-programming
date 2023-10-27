import { useEffect, useState } from "react"
import { Text } from 'react-native';

export default function MaxMin({a, b}) {
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [equal, setEqual] = useState(false);
    useEffect(() => {
        if(a === b) {
            setEqual(true);
        }
        else if (a > b) {
            setMax(a);
            setMin(b);
            setEqual(false);
        } 
        else if(b > a) {
            setMax(b);
            setMin(a);
            setEqual(false);
        }
    },[a,b,equal])
    return (
        equal ? <Text>Valor {a} e {b} são iguais</Text> : <Text>Valor {max} e maior que valor {min} </Text>
    )
}