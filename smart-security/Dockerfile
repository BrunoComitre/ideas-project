FROM ubuntu:20.04

# ENV DEBIAN_FRONTEND=noninteractive
# RUN echo "debconf shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections && \
#     echo "debconf shared/accepted-oracle-license-v1-1 seen true" | debconf-set-selections

# # Build everything here
# WORKDIR /

# SHELL ["/bin/sh", "-c"]

# # Download essential tools
# RUN apt-get update && \
#     apt-get dist-upgrade -y && \
#     apt-get install -y git wget curl nano net-tools build-essential chrpath && \
#     apt-get install -y zip unzip bzip2 curl socat ant vim checkinstall bash && \
#     # Clean apt cache
#     apt-get clean && rm -rf /var/lib/apt/lists/* && \
#     apt-get update && \
#     apt-get dist-upgrade -y

# # clean up
# RUN apt-get clean && \
#     rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/cache/apk/*
