import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle2, DollarSign, Clock, Calendar, Briefcase, X, Check, ChevronRight } from 'lucide-react';

const SwiftReach = () => {
  const [activePlan, setActivePlan] = useState(null);
  
  const plans = [
    {
      name: "Beta",
      price: "$708.00",
      credits: 900,
      pricePerCredit: "$0.79",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        dedicatedManager: false,
        turboSearch: false
      }
    },
    {
      name: "Gamma",
      price: "$1,416.00",
      credits: 1800,
      pricePerCredit: "$0.79",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: false,
        dedicatedManager: false,
        turboSearch: false
      }
    },
    {
      name: "Omega",
      price: "$2,088.00",
      credits: 3600,
      pricePerCredit: "$0.58",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: true,
        dedicatedManager: false,
        turboSearch: false
      }
    },
    {
      name: "Turbo Search",
      price: "$4,680.00",
      credits: 5000,
      pricePerCredit: "$0.94",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: true,
        dedicatedManager: false,
        turboSearch: true
      }
    },
    {
      name: "Custom",
      price: "Min $5k/year",
      credits: "Custom",
      pricePerCredit: "Custom",
      features: {
        freeEmails: true,
        bulkUpload: true,
        accuracyGuarantee: true,
        apiAccess: true,
        dedicatedManager: true,
        turboSearch: true
      }
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SwiftReach</h1>
              <div className="h-6 w-px bg-gray-300 mx-4 hidden md:block"></div>
              <Badge className="bg-blue-600 hover:bg-blue-700 ml-2 md:ml-0 text-xs md:text-sm">Account Executive Position</Badge>
            </div>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 shadow-sm hidden md:flex">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Demo
            </Button>
          </div>
          <p className="text-gray-600 font-medium text-lg border-l-4 border-blue-500 pl-4 max-w-3xl">
            AI-powered contact lookup tool for direct phone numbers and emails of 385M+ professionals
          </p>
        </header>

        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8 bg-blue-50 p-1 rounded-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md">About Us</TabsTrigger>
            <TabsTrigger value="role" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md">Your Role</TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md">Pricing Plans</TabsTrigger>
            <TabsTrigger value="compensation" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md">Compensation</TabsTrigger>
            <TabsTrigger value="potential" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md">Earning Potential</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="p-1">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-2xl">About SwiftReach</CardTitle>
                <CardDescription className="text-blue-100">
                  We outperform competitors like Lusha and ZoomInfo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  SwiftReach is an AI-powered contact lookup tool that finds direct phone numbers and emails
                  of 385M+ professionals using LinkedIn URLs.
                </p>
                
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-inner">
                  <h3 className="font-semibold text-blue-700 mb-3 text-xl flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Our Credibility
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sales101, a community of 200+ sales professionals who use various contact tools, 
                    relies on SwiftReach when other platforms fail to deliver. When they can't find 
                    numbers through their existing contact lookup tools, they turn to Sales 101 "digits" 
                    WhatsApp group where SwiftReach consistently provides hard-to-find phone numbers.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-blue-600 text-2xl mb-1">385M+</h4>
                    <p className="text-gray-600">Professional Contacts</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-blue-600 text-2xl mb-1">98%</h4>
                    <p className="text-gray-600">Accuracy Rate</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-blue-600 text-2xl mb-1">200+</h4>
                    <p className="text-gray-600">Professional Users</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button variant="outline" className="w-full bg-white hover:bg-blue-50 border-blue-200 text-blue-600" onClick={() => window.open("https://swiftreach.ai/pricing", "_blank")}>
                  View Pricing Comparison
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="role">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-2xl">Your Role as Account Executive / Closer</CardTitle>
                <CardDescription className="text-blue-100">
                  Focus on what you do best: demonstrating our platform and CLOSING deals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-gray-800">Host and close demos pre-scheduled by our SDR team</p>
                      <p className="text-gray-600 mt-1">No cold calling or prospecting required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-gray-800">Be available for 4 hours (between 9am-7pm-you can choose the slots) Monday to Friday</p>
                      <p className="text-gray-600 mt-1">Flexible scheduling that works with your lifestyle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-gray-800">Realistically, you'll only conduct about 4 demos (2 hours total) at our current pace</p>
                      <p className="text-gray-600 mt-1">Quality over quantity approach</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-gray-800">Focus on what you do best: demonstrating our platform and CLOSING deals</p>
                      <p className="text-gray-600 mt-1">Leverage your sales expertise to drive revenue</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-end gap-4">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">Learn More</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pricing">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-2xl">Pricing Plans</CardTitle>
                <CardDescription className="text-blue-100">
                  Annual pricing options for SwiftReach customers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <div className="min-w-full divide-y divide-gray-200">
                      {/* Table Header */}
                      <div className="bg-gray-50">
                        <div className="grid grid-cols-5 gap-4 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="font-medium">Plan</div>
                          <div className="font-medium">Price</div>
                          <div className="font-medium">Credits</div>
                          <div className="font-medium">Price/Credit</div>
                          <div className="font-medium text-right">Features</div>
                        </div>
                      </div>
                      
                      {/* Table Body */}
                      <div className="bg-white divide-y divide-gray-200">
                        {plans.map((plan) => (
                          <div 
                            key={plan.name} 
                            className={`grid grid-cols-5 gap-4 px-6 py-4 hover:bg-blue-50 cursor-pointer transition-colors ${activePlan === plan.name ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                            onClick={() => setActivePlan(plan.name === activePlan ? null : plan.name)}
                          >
                            <div className="font-medium text-gray-800">{plan.name}</div>
                            <div className="text-gray-700">{plan.price}</div>
                            <div className="text-gray-700">{plan.credits}</div>
                            <div className="text-gray-700">{plan.pricePerCredit}</div>
                            <div className="text-right">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {activePlan && (
                  <div className="mt-8 p-6 border rounded-xl bg-blue-50 border-blue-200 shadow-inner animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-6 text-blue-800">{plans.find(p => p.name === activePlan)?.name} Plan Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.freeEmails ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">Free Emails</span>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.bulkUpload ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">Bulk Upload</span>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.accuracyGuarantee ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">100% Accuracy Guarantee</span>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.apiAccess ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">API Access</span>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.dedicatedManager ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">Dedicated Account Manager</span>
                      </div>
                      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        {plans.find(p => p.name === activePlan)?.features.turboSearch ? 
                          <Check className="h-5 w-5 text-green-500 mr-3" /> : 
                          <X className="h-5 w-5 text-red-500 mr-3" />}
                        <span className="text-gray-700">Turbo Search Functionality</span>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">Get Started with {plans.find(p => p.name === activePlan)?.name}</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compensation">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-2xl">Compensation Package</CardTitle>
                <CardDescription className="text-blue-100">
                  Base salary plus commission structure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      Base Salary
                    </h3>
                    <p className="text-3xl font-bold text-gray-800 mb-2">INR 10,000/month</p>
                    <p className="text-gray-600 bg-white inline-block px-3 py-1 rounded-full text-sm">Fixed retainer</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      Commission Structure
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">10% on first customer payments</span>
                      </li>
                      <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">5% on upsells</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">Why Our Commission Structure Is Exceptional</h3>
                  <p className="mb-4">Unlike typical industry standards of 5-8%, we offer a generous 10% commission on all initial sales.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-blue-500 p-3 rounded-lg text-center">
                      <p className="text-blue-100 mb-1">Industry Average</p>
                      <p className="text-2xl font-bold">5-8%</p>
                    </div>
                    <div className="bg-blue-700 p-3 rounded-lg text-center border-2 border-white">
                      <p className="text-blue-100 mb-1">SwiftReach Offers</p>
                      <p className="text-2xl font-bold">10%</p>
                    </div>
                    <div className="bg-blue-500 p-3 rounded-lg text-center">
                      <p className="text-blue-100 mb-1">Upsell Commission</p>
                      <p className="text-2xl font-bold">5%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">Apply Today</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="potential">
            <Card className="shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-2xl">Earning Potential</CardTitle>
                <CardDescription className="text-blue-100">
                  Commission projections based on sales performance
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      Conservative Scenario (3 sales/month)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <p className="font-semibold text-lg">3 Beta plans</p>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Entry Level</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">$2,000+ in sales</p>
                        <div className="h-px w-full bg-gray-100 my-3"></div>
                        <p className="text-green-600 font-semibold text-lg mt-2">Your commission: $200</p>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <p className="font-semibold text-lg">3 Turbo Search plans</p>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Premium</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">$13,000+ in sales</p>
                        <div className="h-px w-full bg-gray-100 my-3"></div>
                        <p className="text-green-600 font-semibold text-lg mt-2">Your commission: $1,300</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      Ambitious Scenario (10 sales/month)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <p className="font-semibold text-lg">10 Beta plans</p>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Entry Level</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">$6,800+ in sales</p>
                        <div className="h-px w-full bg-gray-100 my-3"></div>
                        <p className="text-green-600 font-semibold text-lg mt-2">Your commission: $680</p>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                          <p className="font-semibold text-lg">10 Turbo Search plans</p>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Premium</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">$40,000+ in sales</p>
                        <div className="h-px w-full bg-gray-100 my-3"></div>
                        <p className="text-green-600 font-semibold text-lg mt-2">Your commission: $4,000</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg text-white">
                    <h3 className="font-semibold text-white mb-3 text-xl">Monthly Commission Range</h3>
                    <p className="text-4xl font-bold mb-2">$200 - $4,000</p>
                    <p className="text-blue-100">Plus base salary of INR 10,000/month</p>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <div className="text-center">
                        <p className="text-sm text-blue-200">Min</p>
                        <p className="text-xl font-bold">$200</p>
                      </div>
                      
                      <div className="w-full max-w-xs mx-4">
                        <div className="h-2 bg-blue-400 rounded-full">
                          <div className="h-2 bg-white rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-blue-200">Max</p>
                        <p className="text-xl font-bold">$4,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-center p-6">
                <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-6 text-lg">
                  Apply Now and Start Earning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <footer className="mt-12 text-center text-gray-500 text-sm border-t pt-8">
          <p>© 2025 SwiftReach. All rights reserved. <a href='https://github.com/amankhan-7'>@amankhan-7</a></p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Contact Us</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SwiftReach;