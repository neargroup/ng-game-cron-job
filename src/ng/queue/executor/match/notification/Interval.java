package ng.queue.executor.match.notification;

public enum Interval {
    BOOTSTRAP(15, 5L, 5),
    ONE(60, 10L, 30),
    TWF(24 * 60, 21L, 12 * 60),
    SEV(72 * 60, 21L, 48 * 60);

    private final int duration;
    private final Long count;
    private final int threshold;

    Interval(final int minute, final Long count, final int threshold) {
        this.duration = minute;
        this.count = count;
        this.threshold = threshold;
    }

    public int getDuration() {
        return duration;
    }

    public Long getCount() {
        return count;
    }

    public int getThreshold() {
        return threshold;
    }


    @Override
    public String toString() {
        return super.toString().toUpperCase();
    }

}