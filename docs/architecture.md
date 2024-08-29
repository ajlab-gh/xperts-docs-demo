# Fortinet Reference Architecture for Azure

## Considerations and Justifications

!!! note ""
    - **FortiWeb** is primarily designed for web traffic, specifically HTTP/HTTPS, and offers 60+ protections including **machine learning** and **signature-based protections**.

    - **FortiGate** is designed for managing all other types of traffic, supporting multiple protocols, and providing **application control** and **intrusion prevention systems**.

??? note "WAF Feature Comparison: FortiWeb vs. FortiGate"
    | Feature                                  | FortiGate                            | FortiWeb                                                |
    |------------------------------------------|--------------------------------------|---------------------------------------------------------|
    | Web App Attack Signatures                | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | WAF Signatures (FortiGuard Subscription) | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | IP Reputation (FortiGuard subscription)  | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | Layer 7 DoS Protection                   | <span style="color:green">Yes</span> | <span style="color:green">Yes</span> (+ Bot validation) |
    | Machine Learning based Anomaly Detection | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Machine Learning based Bot Mitigation    | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Machine Learning based API Protections   | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | HTTP RFC Validation                      | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | API Protection                           | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Cookie Protection, CSRF                  | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Browser Security (Man-in-the-Browser)    | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Syntax based detection                   | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Antivirus/Antimalware                    | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | Web App Attack Correlation               | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Web App Vulnerability Scanner            | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Web Filtering                            | <span style="color:green">Yes</span> | <span style="color:red">No</span>                       |
    | Data Leak Prevention                     | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | Attack Alert Tuning                      | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Web Defacement Protection                | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | Authentication Offload                   | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | Site Publishing and SSO                  | SSO                                  | <span style="color:green">Yes</span>                    |
    | PCI Compliance                           | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |
    | Dedicated WAF Throughput                 | <span style="color:red">No</span>    | <span style="color:green">Yes</span>                    |
    | SSL Inspection                           | <span style="color:green">Yes</span> | <span style="color:green">Yes</span>                    |

## FortiWeb Reference Architecture

???+ note "High-Level View"
    <span style="color:red;">Click on the image if you want to enlarge it.</span>

    ![](img/fwb-reference-topology.png)

??? note "Detailed View"
    ![](img/fwb-reference-topology-detail.png)

??? note "Detailed View with Routes"
    ![](img/fwb-reference-topology-detail-routes.png)

??? note "Internet originating Non-HTTP(S) flows (i.e. SSH etc…)"
    ![](img/fwb-internet-originating-non-http-flows.png)

??? note "Internet originating HTTP(S) flows"
    ![](img/fwb-internet-originating-http-flows.png)

??? note "Internal originating Non-HTTP(S) flows (i.e. SSH etc…)"
    ![](img/fwb-internal-originating-non-http-flows.png)

??? note "Internal originating HTTP(S) flows"
    ![](img/fwb-internal-originating-http-flows.png)

## FortiGate Reference Architecture

### FortiGate-VM – Active-Passive with Fabric connector

!!! example ""

    **Strengths**

      - Failover of existing connections
      - Support of non-TCP/UDP protocols (e.g. ESP, ICMP)
      - Source IP of connections that ingress from the Internet is not modifed

    **Weaknesses**

      - Failover time is dependent on Azure API response time and can vary from approximtely 45 seconds to up to more than 2 minutes
      - As with all active-passive designs, the passive node is not passing traffic in the majority of times

    **Uses**

      - Architectures requring IPSEC VPN with NAT-T suppert (like IOT or other non-FortiGate IPSEC termination)

??? note "High-Level View"
    ![](img/fwb-template-ap-fabric-connector.png)

??? note "Detailed View"
    **FortiGate1 is Active**
    ![](img/fwb-template-ap-fabric-connector-details.png)

### FortiGate-VM – Active-Passive with Load Balancers

!!! example ""

    **Strangths**

      - Relatively fist fial over (10 to 20 seconds on average)
      - Source IP of connections that ingres from Intern0t is not madified

    **Weaknesses**

      - Existing establshed connections are not failed over(Azure Load Balancer limitation)
      - Only supports UDP or TCP connections (Azoure Load Balancer limitation)
      - As with all active-passive designs, the passive node is not passing traffic in the majerity of times

    **Uses**

      - Fortinet Azure SDWAN hub

??? note "High-Level View"
    ![](img/fwb-template-ap-fabric-load-balancer.png)

??? note "Detailed View"
    ![](img/fwb-template-ap-fabric-load-balancer-details.png)

### FortiGate-VM – Active-Active with Load Balancers

!!! example ""

    **Strengths**

      - Relatively fast fail over (10 to 20 seconds on average)
      - Both firewall VMs are processing traffic during normal operations


    **Weaknesses**

      - Existing established cannections are not failed over(Azure Load Balancer limitation)
      - Only supports UDP or TCP connections (Azure Lead Balancer limitation)
      - Source IP of connections that ingress from Internet is oftan modified with Source NAT


    **Uses**

      - Recommended Architecture

??? note "High-Level View"
    ![](img/fwb-template-aa-fabric-load-balancer.png)

??? note "Detailed View"
    **Multiple Public IPs**
    ![](img/fwb-template-aa-fabric-load-balancer-details.png)

### Azure Gateway Load Balancer and FortiGate

!!! example ""
    - The integration of Fortinet FortiGate Next-Generation Firewall (NGFW) with Azure Gateway Load Balancer (GWLB) simplifies deployment and configuration while reducing outages.
    - The Azure GWLB supports service chaining to enable transparent deployment of firewall NVAs without introducing management overhead.
    - It uses the VXLAN protocol for encapsulation and decapsulation, maintaining flow symmetry for traffic inspection by firewall NVAs.

??? note "Reference Architecture"
    **Consumer Load  Balancer Frontend Public IP**
    ![](img/fwb-azure-gateway-load-balancer.png)

## Frequently Asked Questions

!!! note ""
    **Q – Does this apply to other Public Clouds ?**

    A – This Architecture is specific to Azure.

    ---

    **Q – Why are the FortiWeb VMs and FortiGate VMs in parallel instead of series for Internet web flows?**

    A – FortiWeb has integrated IPS and AV thus no need to duplicate on FortiGate using up cloud computing cycles.

    ---

    **Q – Why is the FWB Internal LB in the FWBExternal Subnet and not the FWBInternal Subnet?**

    A – Because it is used only for traffic passing through SDWAN.

    ---

    **Q – Why is there no Azure Internal LB in the FWBInternal subnet**

    A – FortiWeb can only be deployed in reversed proxy in Azure and thus the traffic replies automatically go back to the appropriate FortiWeb VM thus negating the needs to have Azure Internal Load Balancer in HA Ports.
