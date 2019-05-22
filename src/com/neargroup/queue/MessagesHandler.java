package com.neargroup.queue;

public interface MessagesHandler<T> {

    /**
     * @return Delayed queue name
     */
    String getQueueName();

    /**
     * @param message The Received message  object in the Queue
     * @return The same object after processing it
     */
    T process(T message);
}