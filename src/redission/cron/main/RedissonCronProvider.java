package redission.cron.main;

import org.redisson.Redisson;
import org.redisson.api.RedissonClient;
import org.redisson.config.Config;
import org.redisson.config.SingleServerConfig;

import io.utility.Constants.DBAUTH;


public final class RedissonCronProvider {

    //public static final String IP_KEY = "RedisIP";
    //public static final String DEFAULT_IP = "localhost";
    private static final int CONNECTION_POOL_SIZE = 200;
    private static final int CONNECTION_POOL_MIN_IDLE_SIZE = 100;
    private static final RedissonCronProvider INSTANCE = new RedissonCronProvider();
    private static final Config REDISSON_CONFIG = buildStandaloneConfig();
    private static final RedissonClient REDISSON_CLIENT = Redisson.create(REDISSON_CONFIG);

    public static synchronized RedissonCronProvider getInstance() {
        return INSTANCE;
    }

    public static synchronized RedissonClient getRedissonClient() {
        return REDISSON_CLIENT;
    }

    private RedissonCronProvider() {}

        private static Config buildStandaloneConfig() {
        Config config = new Config();
        SingleServerConfig singleServerConfig = config.useSingleServer();
        singleServerConfig.setAddress(DBAUTH.REDIS_CRON_IP + ":" + DBAUTH.REDIS_CRON_PORT);
        singleServerConfig.setTimeout(15000);
        singleServerConfig.setConnectionPoolSize(CONNECTION_POOL_SIZE);
        singleServerConfig.setConnectionMinimumIdleSize(CONNECTION_POOL_MIN_IDLE_SIZE);
        // we are storing values as raw strings...
        //config.setCodec(StringCodec.INSTANCE);

        return config;
    }
}