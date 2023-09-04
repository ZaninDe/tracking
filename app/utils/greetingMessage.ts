export function greetingMessage() {
  const currentTime: Date = new Date()
  const hours: number = currentTime.getHours()

  if (hours > 18 && hours < 0) {
    return 'Boa Noite!'
  } else if (hours > 0 && hours < 12) {
    return 'Bom dia!'
  } else {
    return 'Boa tarde!'
  }
}
