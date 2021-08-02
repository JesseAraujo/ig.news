import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribleButton({ priceId }: SubscribeButtonProps) {
    return (
        <button
            type='button'
            className={styles.subscribleButton}
        >
            Subscrible now

        </button>
    )

}