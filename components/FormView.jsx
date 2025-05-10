import { useThemeColor } from '@/hooks/useThemeColor';
import {
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        padding: 24,
        marginTop: 0
    }
});

const FormView = ({ style, ...props }) => {
    const backgroundColor = useThemeColor({}, 'bg_secondary');

    return (
        <View
            style={[
                {backgroundColor},
                styles.container,
                style
            ]}
            {...props}
        />
    );
}

export default FormView;