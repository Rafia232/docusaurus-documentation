---
id: dashboard
sidebar_position: 5
title: 5. Dashboards
---

# 5. Dashboards
The platform provides four role-based dashboards. Regional Users use the Technician Dashboard to manage assigned tickets and the Regional Dashboard to monitor activity across their region. Administrators use the Management Dashboard to review organization-wide trends, SLA achievement, recurring issues, and technician productivity. Management and National Users use the Executive Dashboard to review system-wide ticket volumes, priorities, applications, SLA compliance, and technician workload.

---

## 5.1 Technician Dashboard- Regional User

The **Technician Dashboard** provides regional users with a personalized overview of the tickets assigned to their account.

Although regional users can access tickets within their assigned region, the Technician Dashboard focuses specifically on the logged-in user’s ticket workload, SLA performance, recently completed work, and tickets awaiting customer responses.

Regional users can switch between:

- **Technician Dashboard**
- **Regional Dashboard**

The Technician Dashboard includes:

- Ticket summary cards
- Assigned ticket details
- Real-time SLA countdowns
- Personal performance metrics
- Tickets awaiting customer responses
- Recently closed tickets
- Date-range controls

:::note
The information displayed on the Technician Dashboard is based on tickets assigned to the currently logged-in regional user.
:::

---

### 5.1.1 Dashboard Date Filters

Regional users can change the reporting period using the available date filters.

Available options include:

- **Today**
- **Week**
- **Month**
- **Quarter**
- **Custom**

The **Custom** option allows the user to select a specific date range.

A **Refresh** option is also available to reload the dashboard and display the latest ticket information.


---

### 5.1.2 Ticket Summary Cards

The ticket summary cards provide a quick overview of the regional user’s assigned ticket workload.

The dashboard may display the following summary cards:

| Summary Card | Description |
|---|---|
| My Assigned Tickets | Shows the total number of tickets currently assigned to the logged-in regional user. |
| Open Tickets | Shows assigned tickets that are currently open or in progress. |
| Overdue Tickets | Shows assigned tickets that have exceeded their configured SLA deadline. |
| High Priority Tickets | Shows assigned tickets marked with High priority. |
| Critical Tickets | Shows assigned tickets marked with Critical priority. |
| Closed Tickets | Shows the number of tickets closed by the logged-in regional user. |

These cards help the user quickly identify:

- The total assigned workload
- Tickets requiring immediate attention
- Overdue tickets
- High-impact tickets
- Completed tickets

:::tip
Review the Overdue, High Priority, and Critical ticket cards first to identify tickets requiring urgent action.
:::

---

### 5.1.3 My Assigned Tickets List

The **My Assigned Tickets** section displays active tickets currently assigned to the logged-in regional user.

Each ticket entry may include:

| Information | Description |
|---|---|
| Ticket | Displays the ticket title and ticket number. |
| Priority | Shows the urgency level of the ticket. |
| Status | Shows the current progress of the ticket. |
| SLA Due In | Shows the remaining SLA time or how long the ticket has been overdue. |

---

### 5.1.4 Live SLA Countdown

The **SLA Due In** column displays a real-time countdown for each assigned ticket.

The countdown helps the regional user understand how much time remains before the ticket reaches its SLA deadline.

When a ticket has already exceeded the SLA deadline, the countdown may appear as a negative value.

This indicates that the ticket is already overdue.

:::caution
Tickets with a negative SLA countdown should be reviewed and addressed as soon as possible.
:::

---

### 5.1.5 Personal Performance

The **Personal Performance** section summarizes the logged-in regional user’s ticket-handling performance.

It may include the following metrics:

| Metric | Description |
|---|---|
| Closed | Shows the total number of tickets closed by the user during the selected period. |
| Average Resolution | Shows the average time taken by the user to resolve assigned tickets. |
| First-Time Fix | Shows the percentage of tickets resolved successfully without escalation or reopening |

These metrics help regional users evaluate their individual support performance.

They can also be used to identify areas where response time, resolution quality, or first-time-fix performance can be improved.

---

### 5.1.6 Pending Customer Response

The **Pending Customer Response** section displays tickets that are currently waiting for a reply from the facility user.

A ticket may appear in this section after a staff member posts a client-facing message and requires additional information or confirmation from the facility user.

Each item may display:

- Ticket title
- Ticket number

Regional users can open a listed ticket to review the conversation and determine whether the customer has responded.

:::note
Internal Notes do not normally place a ticket under Pending Customer Response because Internal Notes are visible only to technicians and authorized staff.
:::

---

### 5.1.7 Recently Closed

The **Recently Closed** section displays the tickets most recently completed by the logged-in regional user.

Each entry may show:

- Ticket title
- Ticket number

This section allows the user to quickly review recently completed work without searching through the complete ticket list.

---

## 5.2 Regional Dashboard- Regional User

The **Regional Dashboard** provides regional users with an overview of ticket activity across the entire region assigned to their account.

Unlike the Technician Dashboard, which focuses on tickets assigned to the logged-in user, the Regional Dashboard presents region-wide information across all facilities and locations within the user’s assigned region.

Regional users can switch between:

- **Technician Dashboard**
- **Regional Dashboard**

The Regional Dashboard includes:

- Tickets by Location
- Locations with Highest Incidents
- Open Tickets by Location
- Average Response Time by Location
- Date-range controls
- Dashboard refresh controls

:::note
A regional user can view dashboard information only for the region assigned to their account.
:::

---

### 5.2.1 Dashboard Date Filters

Regional users can change the dashboard reporting period using the available date filters.

Available options include:

- **Today**
- **Week**
- **Month**
- **Quarter**
- **Custom**

The **Custom** option allows the user to select a specific date range.

A **Refresh** option is also available to reload the dashboard and display the latest regional ticket information.

To change the reporting period:

1. Open the **Regional Dashboard**.
2. Select the required date option.
3. Choose a custom date range when necessary.
4. Review the updated dashboard information.
5. Click **Refresh** to load the latest data.

---

### 5.2.2 Tickets by Location

The **Tickets by Location** visualization compares the total number of tickets and open tickets for each location within the assigned region.

The chart may display:

| Metric | Description |
|---|---|
| Total | Shows the total number of tickets created for the location. |
| Open | Shows the number of tickets that are currently open for the location. |


:::tip
Compare the Total and Open ticket values to identify locations where a large proportion of tickets remain unresolved.
:::

---

### 5.2.3 Locations with Highest Incidents

The **Locations with Highest Incidents** visualization highlights the locations with the highest number of reported support incidents.

The chart compares:

- Total incidents
- Open incidents

This information helps regional users identify facilities that are experiencing repeated or unusually high levels of support issues.


:::note
A high incident count may indicate repeated technical issues, operational challenges, or a location with a larger volume of system usage.
:::

---

### 5.2.4 Open Tickets by Location

The **Open Tickets by Location** section lists open tickets across the facilities within the assigned region.

The table may include the following information:

| Column | Description |
|---|---|
| Ticket | Displays the ticket title and ticket number. |
| Location | Shows the facility or location associated with the ticket. |
| Priority | Shows the urgency level assigned to the ticket. |
| System | Shows the application or system associated with the reported issue. |

---

### 5.2.5 Average Response Time by Location

The **Average Response Time by Location** visualization compares the average time taken by facility users to respond to tickets across different locations.

The response time is displayed for each facility or location within the assigned region.

This visualization helps regional users:

- Compare customer response times between locations
- Identify facilities with delayed responses
- Monitor communication efficiency
- Recognize locations where ticket resolution may be delayed because additional information is pending
- Support regional performance analysis

The displayed value may be presented in minutes.

:::note
This metric measures the average time taken by facility users to respond during ticket communication. It does not represent the technician’s ticket-resolution time.
:::

---

## 5.3 Management Dashboard- Administrator

The Management Dashboard shows an overall view of helpdesk performance, including ticket status, SLA performance, response and resolution metrics, ticket distribution by priority, region, location and system, recurring issue categories, System Pulse by application, and technician workload.

It consolidates ticket information from:

- All regions
- All locations and facilities
- All configured applications or systems
- All technicians working under those regions
- All ticket priority levels
- All ticket statuses

Administrators use this dashboard to review ticket status, SLA performance, response and resolution metrics, ticket distribution by priority, region, location, and system, recurring issue categories, System Pulse by application, and technician workload.

:::note
The Management Dashboard displays organization-wide ticket data rather than information from a single region, location, or technician.
:::

---

## 5.3.1 Dashboard Time Filters

The dashboard provides time-based filters that allow users to change the reporting period.

Available options may include:

- Today
- Week
- Month
- Quarter
- Custom date range

To change the reporting period:

1. Open the **Management Dashboard**.
2. Select the required time filter.
3. For a custom period, select the required date range.
4. Wait for the dashboard metrics and visualizations to refresh.

The selected period is applied across the dashboard.

### Refresh Dashboard

The **Refresh** option reloads the dashboard using the latest available ticket data.

Use this option after changing filters or when newly updated information is not yet visible.

---

## 5.3.2 System Pulse

The **System Pulse** section provides a quick view of ticket activity across the configured applications or systems.

Each system card may display:

- System or application name
- Number of open tickets
- Number of overdue tickets

This section helps users quickly identify which systems currently have the highest number of open or overdue tickets.

:::tip
Systems with a high number of open or overdue tickets may require immediate operational review or additional technical resources.
:::

---

## 5.3.3 Management Dashboard Metrics

The dashboard includes summary cards that provide a high-level view of Service Desk performance.

The available metrics may include:

| Metric | Description |
|---|---|
| Tickets | Shows the total number of tickets for the selected reporting period. |
| Open / Closed | Shows the number of open and closed tickets. |
| Overdue | Shows the number of tickets that have passed their configured SLA deadline. |
| Average Resolution | Shows the average time required to resolve tickets. |
| Average First Response | Shows the average time taken to provide the first response to a ticket. |
| SLA Compliance | Shows the percentage of tickets completed within the configured SLA. |

These metrics help Administrators evaluate overall support performance at a glance.

---

## 5.3.4 Tickets by Priority

The **Tickets by Priority** visualization displays the distribution of tickets across the configured priority levels.

The visualization shows:

- Total ticket count
- Number of tickets for each priority
- Percentage distribution by priority

This helps users understand the urgency profile of the current ticket workload.

---

## 5.3.5 Tickets by Region

The **Tickets by Region** section compares ticket activity across all configured regions.

For each region, the dashboard may display:

- Region name
- Number of open tickets
- Total number of tickets
- A visual progress bar

This section can be used to:

- Compare ticket volumes between regions
- Identify regions with the highest number of open tickets
- Monitor regional support demand
- Prioritize resources based on ticket workload

The regions are generally ranked according to ticket volume or open-ticket count.

---

## 5.3.6 Top 10 Recurring Categories

The **Top 10 Recurring Categories** chart displays the most frequently reported support issues.

The ranking may include:

- Categories
- Subcategories
- Number of incidents reported for each issue

The chart can be used to:

- Identify repeated problems across the organization
- Detect common system or operational issues
- Prioritize preventive actions
- Support user training and documentation improvements
- Plan system enhancements
- Reduce repeated ticket creation

:::tip
Review recurring categories regularly to determine whether they can be reduced through system improvements, preventive maintenance, training, or updated documentation.
:::

---

## 5.3.7 Tickets by Location

The **Tickets by Location** chart compares ticket activity across all configured facilities or locations.

For each location, the chart may show:

- Total tickets
- Open tickets
- Facility or location name

This visualization helps users:

- Compare ticket volumes between facilities
- Identify locations with the highest number of open tickets
- Monitor facility-level support demand
- Allocate technicians and support resources more effectively

### View More

The **View More** option opens a modal containing a detailed table of ticket data for all available locations.

The modal may include:

| Column | Description |
|---|---|
| Facility | The name of the location or facility. |
| Total Tickets | The total number of tickets associated with the facility. |
| Open Tickets | The number of tickets that are currently open. |

These data can also be exported by clicking the **export** button.

---

## 5.3.8 Tickets by System

The **Tickets by System** chart compares ticket activity across the configured applications or systems.

For each system, the chart may display:

- Total tickets
- Open tickets

The chart helps users:

- Compare support demand between systems
- Identify systems generating the most tickets
- Review the number of unresolved issues
- Prioritize technical maintenance and system improvements

---

## 5.3.9 Technician Workload

The **Technician Workload** section compares the current workload of technicians across the organization.

For each technician, the dashboard may display:

- Technician name
- Number of open tickets
- Total number of assigned tickets
- A visual workload indicator

This section can be used to:

- Compare workloads between technicians
- Identify technicians with a high number of open tickets
- Detect uneven ticket distribution
- Support reassignment decisions
- Improve workload balancing
- Monitor technician capacity

### View More

The **View More** option opens a modal containing the detailed workload data for all technicians.

The modal may include:

| Column | Description |
|---|---|
| Technician | The technician’s name. |
| Total Tickets | The total number of tickets assigned to the technician. |
| Open Tickets | The number of assigned tickets that remain open. |


These data can also be exported by clicking the **export** button.

---

## 5.4 Executive Dashboard

The Executive Dashboard shows national support trends, monthly incident trends, technician productivity, SLA achievement, recurring ticket categories, and escalated ticket details, with time-period and filtering options.

It consolidates ticket information from:

- All regions
- All locations and facilities
- All technicians working under those regions
- All ticket categories and subcategories

The dashboard helps Management and National Users monitor support trends, incident volumes, technician performance, SLA compliance, and recurring issues from a single page.

:::note
The Executive Dashboard displays organization-wide ticket data rather than information from a single region or facility.
:::

---

## 5.4.1 Dashboard Time Filters

The dashboard provides time-based filters that allow users to change the reporting period.

Available options may include:

- Today
- Week
- Month
- Quarter
- Custom date range

To change the reporting period:

1. Open the **Executive Dashboard**.
2. Select the required time filter.
3. For a custom period, select the required date range.
4. Wait for the dashboard visualizations to refresh.

The selected time range is applied to the dashboard data and charts.

### Refresh Dashboard

The **Refresh** option reloads the dashboard using the latest available ticket data.

Use this option after changing filters or when newly updated information is not yet visible.

---

## 5.4.2 National Support Trends

The **National Support Trends** chart shows changes in support issues across different categories over time.

The chart can be used to:

- Compare trends between different support categories
- Identify periods with increased ticket activity
- Monitor changes in recurring support issues
- Understand which categories are becoming more or less common
- Compare issue patterns across the selected reporting period

Each line represents a category or subcategory included in the visualization.

This helps Management and National Users identify long-term patterns and areas that may require additional resources, training, or preventive action.

---

## 5.4.3 Monthly Incident Trends

The **Monthly Incident Trends** chart displays the total number of incidents reported during each month.

This visualization helps users:

- Compare incident volumes between months
- Identify months with unusually high ticket activity
- Monitor changes in organizational support demand
- Review whether incident volumes are increasing or decreasing
- Plan staffing and support resources based on historical workload

Each bar represents the total number of incidents recorded for a specific month within the selected reporting period.

---

## 5.4.4 Technician Productivity

The **Technician Productivity** chart compares technicians based on their average ticket resolution time.

The chart includes technicians working across the organization, including technicians assigned under different regions.

It can be used to:

- Compare average resolution times between technicians
- Identify technicians resolving tickets more quickly
- Detect unusually high resolution times
- Review workload and performance differences
- Support resource allocation and performance monitoring

The resolution time is displayed using a time-based value, such as minutes.

:::note
A lower average resolution time may indicate faster ticket completion, but performance should also be reviewed together with ticket complexity, workload, priority, and resolution quality.
:::

---

## 5.4.5 SLA Achievement

The **SLA Achievement** section shows the percentage of tickets completed within the configured Service Level Agreement.

The displayed percentage represents the organization-wide SLA achievement rate for the selected reporting period.

The section may include the following filters:

- Region
- Priority

---

## 5.4.6 Top Recurring Categories

The **Top Recurring Categories** section lists the most frequently reported categories, ranked by incident count.


Each item shows:

- Ranking position
- Category name
- Total number of incidents

The section can be used to:

- Identify the most common support issues
- Detect repeated problems across the organization
- Prioritize preventive actions
- Plan system improvements
- Identify areas requiring user training
- Support management decisions using incident frequency


:::tip
Review recurring categories regularly to identify issues that may be reduced through system changes, documentation, training, or preventive maintenance.
:::

## 5.4.7 Escalated Ticket Details

This section lists tickets escalated for additional attention. Management and National Users can review available escalation details using the selected time period and available filters.
